import { Footer } from "flowbite-react";

function FooterComponent() {
  return (
    <Footer className="mt-16 bg-slate-100 dark:bg-primary" container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src="./logo.png"
            alt="Flowbite Logo"
            name="Haiku"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">Contacto</Footer.Link>
            <Footer.Link href="#">Privacidad</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="DitGestion" year={2024} />
      </div>
    </Footer>
  );
}

export default FooterComponent;
