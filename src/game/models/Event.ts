export type Event = { type: string, payload: any }
export type EventHandler = (event: Event) => void

class EventBusImpl {
    private handlers: { [type: string]: EventHandler[] } = {};

    fire(event: Event) {
        if (this.handlers[event.type]) {
            this.handlers[event.type].forEach((handler) => {
                handler(event);
            })
        }
    }

    register(eventType: string, handler: EventHandler) {
        if (!this.handlers[eventType]) {
            this.handlers[eventType] = [];

        }
        this.handlers[eventType].push(handler);
    }

}

export const EventBus = new EventBusImpl();
