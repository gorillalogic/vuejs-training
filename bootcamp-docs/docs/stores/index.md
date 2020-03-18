### Flux Pattern

Flux is an architectural application pattern introduced by Facebook for building scalable client-side applications. The simplicity of this pattern relies in its **_unidirectional data flow_** making states updates more predictable and easy to track.

## Flux Basics

Data in a _Flux application_ flows in a single direction:

<img :src="$withBase('/flux-pattern.png')" alt="Flux data flow">

Flux eschews MVC in favor of a **unidirectional** data flow. When a user interacts with a **_View_**, the view _propagates_ an **_action_** through a central **_dispatcher_**, to the various **_stores_** that hold the application's data and business logic, which updates all of the **_views_** that are affected. This allows the store to send updates without specifying how to transition views between states.

Couple of key concepts there:

- **Actions:** Describe an action/event that took place in the application.
- **Dispatcher:** Receives actions and broadcasts payloads to registered callbacks.
- **Store:** Manage the state and logic needed to update it for specific parts of the application.
- **Views:** UI components

In simple words, the flux pattern works as follows:

1. The **View** _emits_ **_Actions_** to the **dispatcher**
2. The **dispatcher** broadcasts the actions to all the stores that subscribed to it.
3. The **Store** updates the appropriate state and _emits_ a _Change_ to the **views**.
4. The **View** reacts to the Change when a state has been updated.

Note that there are not two-way data bindings. Which allows us to reason easily about our application in a way that is reminiscent of functional reactive programming, where data flows through the application in a single direction. Application state is maintained only in the stores, allowing the different parts of the application to remain highly decoupled.

## Additional Links

- For more in depth introduction about the flux pattern please refer to the official Facebook docs [Flux](https://facebook.github.io/flux/docs/in-depth-overview)

- Flux [Github repository](https://github.com/facebook/flux)
