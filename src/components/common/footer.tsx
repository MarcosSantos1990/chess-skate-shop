const Footer = () => {
  return (
    <div className="bg-accent w-full gap-1 p-8">
      <p className="font-meduim text-xs">
        © 2023 Chess Skate Shop. All rights reserved.
      </p>
      <p className="font-meduim text-xs">
        Desenvolvido por{" "}
        <a
          href="https://github.com/MarcosSantos1990"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Marcos Santos
        </a>
      </p>
    </div>
  );
};

export default Footer;
