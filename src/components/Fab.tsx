import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

interface Props {
  names: string[];
  links: string[];
}

function Fab({ names, links }: Props) {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    function onScroll() {
      let currentPosition = window.scrollY;
      if (currentPosition > scrollTop) {
        // Scrolling down
        showFab();
      } else {
        // Scrolling up
        hideFab();
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const listItems: React.ReactElement[] = [];
  names.forEach((name, index) => {
    const link = links[index];
    listItems.push(
      <HashLink to={link} onClick={hideFabAfterDelay}>
        {name}
      </HashLink>
    );
  });
  return (
    <>
      <div
        className="fab-container"
        id="fab-container"
        tabIndex={0}
        onBlur={closeNavMenu}
      >
        <input type="checkbox" id="toggle" />
        <label className="fab" htmlFor="toggle"></label>
        <nav className="fab-nav">
          <ul>{listItems}</ul>
        </nav>
      </div>
    </>
  );
}

export default Fab;

async function hideFabAfterDelay() {
  await new Promise((f) => setTimeout(f, 600));
  hideFab();
}

function hideFab() {
  dimFab();
  closeNavMenu();
  const fabContainer = document.getElementById("fab-container");
  if (fabContainer != null) {
    fabContainer.style.visibility = "hidden";
  }
}

function dimFab() {
  const fabContainer = document.getElementById("fab-container");
  if (fabContainer != null) {
    fabContainer.style.opacity = "0";
  }
}

function closeNavMenu() {
  const fabCheckbox = document.getElementById("toggle") as HTMLInputElement;
  if (fabCheckbox != null) {
    fabCheckbox.checked = false;
  }
}

function showFab() {
  makeFabOpaque();
  const fabContainer = document.getElementById("fab-container");
  if (fabContainer != null) {
    fabContainer.style.visibility = "visible";
  }
}

function makeFabOpaque() {
  const fabContainer = document.getElementById("fab-container");
  if (fabContainer != null) {
    fabContainer.style.opacity = "1";
  }
}
