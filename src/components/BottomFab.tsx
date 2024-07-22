import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

interface Props {
  names: string[];
  links: string[];
}

function BottomFab({ names, links }: Props) {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    function onScroll() {
      let currentPosition = window.scrollY;
      let hasReachedBottom =
        document.body.scrollHeight <= currentPosition + window.innerHeight;
      if (currentPosition > scrollTop || hasReachedBottom) {
        // Scrolling down, or at the bottom of the screen, when rubber-banding
        hideFab();
      } else {
        // Scrolling up (no rubber-banding effect at the top)
        showFab();
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
        className="fab-container-bottom"
        id="fab-container-bottom"
        tabIndex={0}
        onBlur={closeNavMenu}
      >
        <input type="checkbox" id="toggle-bottom" />
        <label className="fab-bottom" htmlFor="toggle-bottom"></label>
        <nav className="fab-nav-bottom">
          <ul>{listItems}</ul>
        </nav>
      </div>
    </>
  );
}

export default BottomFab;

async function hideFabAfterDelay() {
  await new Promise((f) => setTimeout(f, 100));
  hideFab();
}

function hideFab() {
  dimFab();
  closeNavMenu();
  const fabContainer = document.getElementById("fab-container-bottom");
  if (fabContainer != null) {
    fabContainer.style.visibility = "hidden";
  }
}

function dimFab() {
  const fabContainer = document.getElementById("fab-container-bottom");
  if (fabContainer != null) {
    fabContainer.style.opacity = "0";
  }
}

function closeNavMenu() {
  const fabCheckbox = document.getElementById(
    "toggle-bottom"
  ) as HTMLInputElement;
  if (fabCheckbox != null) {
    fabCheckbox.checked = false;
  }
}

function showFab() {
  makeFabOpaque();
  const fabContainer = document.getElementById("fab-container-bottom");
  if (fabContainer != null) {
    fabContainer.style.visibility = "visible";
  }
}

function makeFabOpaque() {
  const fabContainer = document.getElementById("fab-container-bottom");
  if (fabContainer != null) {
    fabContainer.style.opacity = "1";
  }
}
