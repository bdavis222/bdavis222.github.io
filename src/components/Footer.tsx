import NavigationLinks from "./NavigationLinks";

interface Props {
  disclaimer?: string;
}

function Footer({ disclaimer = "" }: Props) {
  const year: number = new Date().getFullYear();
  return (
    <>
      <hr />
      <NavigationLinks />
      {disclaimer && <footer>{disclaimer}</footer>}
      <footer>&copy; Copyright {year} Brian Davis. All Rights Reserved.</footer>
    </>
  );
}

export default Footer;
