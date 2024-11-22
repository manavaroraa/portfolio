import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="flex justify-between py-8 sm:py-12">
      <h1 className="text-3xl text-primary font-semibold">MD</h1>
      <ul className="gap-5 hidden text-xl sm:flex">
        <a
          href="#skills"
          className="hover:text-primary hover:scale-105 font-medium transition-all duration-200 ease-in"
        >
          <li>Skills</li>
        </a>
        <a
          href="#contact"
          className="hover:text-primary hover:scale-105 font-medium transition-all duration-200 ease-in"
        >
          <li>Contact</li>
        </a>
      </ul>
      <ThemeToggle />
     
    </div>
  );
};
export default Header;
