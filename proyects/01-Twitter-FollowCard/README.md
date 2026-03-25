# 🐦 Twitter Follow Card (React)

Este proyecto es una pequeña aplicación en **React** que simula las tarjetas de seguimiento de Twitter/X. Permite seguir o dejar de seguir usuarios de forma interactiva utilizando estado local (`useState`).

---

## 🚀 Características

- Renderizado dinámico de usuarios con `.map()`
- Uso de `props` y `children`
- Manejo de estado con `useState`
- Cambio dinámico de estilos (`className`)
- Interacción con eventos (`onClick`)
- UI simple inspirada en Twitter

---

## 🧠 Conceptos clave

### 1. Renderizado de listas

Se utiliza `.map()` para recorrer un array de usuarios y renderizar un componente por cada uno:

```jsx
{
   users.map((user) => {
      const { userName, name, isfollowing } = user
      return (
         <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isfollowing}
         >
            {name}
         </TwitterFollowCard>
      )
   })
}
```

--- 

### 2. Uso de children

children permite pasar contenido dentro del componente:

<TwitterFollowCard>
  {name}
</TwitterFollowCard>

---

### 🛠️ Tecnologías usadas
React
JavaScript (ES6+)
CSS

---

> Proyecto basado para dar los primeros pasos en React