const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt porta neque, ac ornare justo Aliquam tincidunt porta neque.'

const year = new Date().getFullYear()

const footer = {
  copyright: `${year} Copyright`,
  rotes: [
    {
      heading: 'Product',
      routes: [
        ['Product', '/product'],
        ['Pricing', '/pricing'],
        ['Log in', '/login'],
        ['Request access', '/access'],
        ['Partnership', '/partnership'],
      ],
    },
    {
      heading: 'About Us',
      routes: [
        ['About Berita.id', '/about'],
        ['Contact us', '/contact'],
        ['features', '/features'],
        ['Careers', '/careers'],
      ],
    },
    {
      heading: 'Resource',
      routes: [
        ['Help center', '/help'],
        ['Book a demo', '/demo'],
        ['Server status', '/status'],
        ['Blog', '/blog'],
      ],
    },
  ],
}

module.exports = {
  title: 'Berita.id',
  heading: 'Minimalist news platform',
  subHeading: description,
  footer,
}
