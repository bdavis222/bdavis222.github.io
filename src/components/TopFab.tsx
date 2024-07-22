import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

interface Props {
  names: string[];
  links: string[];
}

function TopFab({ names, links }: Props) {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    function onScroll() {
      const scrollBuffer = 5;
      let currentPosition = window.scrollY;
      let hasReachedBottom =
        document.body.scrollHeight <= currentPosition + window.innerHeight;
      var lastPositionScrolledDown = scrollTop;
      var lastPositionScrolledUp = scrollTop;
      if (currentPosition <= 0) {
        // If the user has scrolled to the top of the screen
        showFab();
      }
      if (currentPosition > scrollTop) {
        // Scrolling down
        if (currentPosition > lastPositionScrolledUp + scrollBuffer) {
          // If the user has scrolled down at least the number of buffer pixels since scrolling up
          showFab();
          lastPositionScrolledDown = currentPosition;
        }
      } else if (!hasReachedBottom) {
        // Scrolling up, but not due to bottom rubber-banding
        if (currentPosition < lastPositionScrolledDown - scrollBuffer) {
          // If the user has scrolled up at least the number of buffer pixels since scrolling down
          hideFab();
          lastPositionScrolledUp = currentPosition;
        }
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

export default TopFab;

async function hideFabAfterDelay() {
  await new Promise((f) => setTimeout(f, 100));
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
