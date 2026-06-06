// src/components/Header.jsx

/**
 * Header Component
 * Displays the blog title.
 *
 * Connected To:
 * - Parent: App
 */

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;