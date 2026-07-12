export const store = (KEY) => ({
  cards: new Map(loadCards(KEY).map((card) => [card.id, card])),
  persist() {
    localStorage.setItem(KEY, JSON.stringify([...this.cards.values()]));
  },
  list() {
    return [...this.cards.values()];
  },
  create(title, description, status) {
    const siblings = this.list().filter((c) => c.status === status);
    const position = Math.max(0, ...siblings.map((c) => c.position)) + 1;
    const card = {
      id: crypto.randomUUID(),
      title,
      description,
      status,
      position,
    };
    this.cards.set(card.id, card);
    this.persist();
    return card;
  },
  update(id, patch) {
    const existing = this.cards.get(id);
    if (!existing) {
      throw new Error(`Card "${id}" does not exist.`);
    }
    const card = {
      ...existing,
      ...patch,
    };
    this.cards.set(id, card);
    this.persist();
    return card;
  },
  remove(id) {
    this.cards.delete(id);
    this.persist();
  },
});

export function loadCards(KEY) {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    if (!Array.isArray(parsed)) return [];
    return (
      parsed
        .filter(
          (card) =>
            typeof card?.id === "string" &&
            typeof card?.title === "string" &&
            typeof card?.status === "string" &&
            typeof card?.position === "number",
        )
        // migrate cards saved before descriptions existed
        .map((card) => ({
          ...card,
          description: typeof card.description === "string" ? card.description : "",
        }))
    );
  } catch {
    return [];
  }
}
