const Footer = () => {
  const footerContent = [
    {
      title: "Company",
      links: [
        "About",
        "Leadership",
        "Blog",
        "Careers",
        "Referral Programs",
        "Community",
      ],
    },
    {
      title: "Product",
      links: [
        "Pricing",
        "Features",
        "Integrations",
        "FAQs",
        "Contact Us",
        "Newsletter",
      ],
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Support",
        "Terms & Conditions",
        "Privacy Policy",
        "Security",
        "Report a Bug",
      ],
    },
    {
      title: "Industry",
      links: [
        "Digital Transformation",
        "Enterprise",
        "Consumer",
        "Healthcare",
        "Retail",
        "Sports",
      ],
    },
    {
      title: "Legal",
      links: [
        "Terms & Conditions",
        "Privacy Policy",
        "Security",
        "Cookie Policy",
        "Trademarks",
        "Disclaimer",
      ],
    },
    {
      title: "Social",
      links: [
        "Facebook",
        "Twitter",
        "Instagram",
        "LinkedIn",
        "YouTube",
        "Pinterest",
      ],
    },
  ];

  return (
    <footer style={{ marginTop: 300 }} className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {footerContent.map((section, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2 mb-4">
              <h5 className="mb-3">{section.title}</h5>
              <ul className="list-unstyled">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-decoration-none text-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center border-top border-secondary pt-3">
        <p className="text-muted mb-0">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
