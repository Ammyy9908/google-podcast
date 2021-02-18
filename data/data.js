const data = [
  {
    id: "aHR0cHM6Ly9zaW1wbGVwcm9ncmFtbWVyLmxpYnN5bi5jb20vcnNz",
    author: "John Sonmez",
    title: "Simple Programmer",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNbSxmQw7q9fTK1UbGB9d0lXq4X1G1rPP9oDjCj_40Hw1UUCC",
  },
  {
    id: "aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL3RoZS1kYWlseQ",
    author: "The New York Times",
    title: "The Daily",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZt805JMihjChbsRmtabBwt86kFvGcdEdzg2Fg-rP_hPUo6We",
  },
  {
    id: "aHR0cHM6Ly9mZWVkcy5tZWdhcGhvbmUuZm0vc3R1ZmZ5b3VzaG91bGRrbm93",
    title: "Stuff You should Know",
    author: "IHeartRadio",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGRJf8KoRq8gfy_jpVgqDgtE-eKyXpHOpFEHlAmVqW1L2uOqo",
  },
  {
    id: "aHR0cHM6Ly9mZWVkczIuZmVlZGJ1cm5lci5jb20vdGVkdGFsa3NfYXVkaW8",
    author: "TED Talks Daily",
    title: "TED",
    cover:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvWRhYcJbWw4w6a9CFskUnb0-McmhM1QTyfq0omvEuVZyrA6Y",
  },
  {
    id: "aHR0cDovLzdnb29kbWludXRlcy5saWJzeW4uY29tL3Jzcw",
    author: "Clyde Lee Denis",
    title: "7 Good Minutes",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoT9wuGi5f8aUnktGKqPbGdpoft9Bp64Z03Mp51UHkFLfK4Ubn",
  },
  {
    id: "aHR0cHM6Ly9mZWVkcy5ucHIub3JnLzUxMDI4OS9wb2RjYXN0LnhtbA",
    author: "NPR",
    title: "Planet Money",
    cover:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeQypKxL8Qzjf0n28K0uUD-iVMtxcHx-G_NspdBSTCJcZv-YWh",
  },
  {
    id: "aHR0cHM6Ly9mZWVkcy5ucHIub3JnLzM0NDA5ODUzOS9wb2RjYXN0LnhtbA",
    author: "NPR",
    title: "Wait Wait Don't tell Me!",
    cover:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkmRFEVhn8F_uE_ukJcvSu3SBctAK07ZKXEn00clPmtfC3KxoJ",
  },
  {
    id: "aHR0cHM6Ly9mZWVkcy5ucHIub3JnLzM4MTQ0NDkwOC9wb2RjYXN0LnhtbA",
    author: "NPR",
    title: "Fresh Air",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xuULLVWOHniPL2pBfT3NuN1LElVkuqez6yxfbn1DRvFyqUw",
  },
  {
    id:
      "aHR0cHM6Ly93d3cudGFsa2luZ3BvbGl0aWNzcG9kY2FzdC5jb20vYmxvZz9mb3JtYXQ9cnNz",
    author: "Talking Politics",
    title: "",
    cover:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvWRhYcJbWw4w6a9CFskUnb0-McmhM1QTyfq0omvEuVZyrA6Y",
  },
  {
    id: "aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2Fwb2xvZ3ktbGluZQ",
    author: "Wondery",
    title: "The Aplogy Line",
    cover:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQSoNyns3RBUyy3G0EhNIeTyvhi-fU0Fi57YztvRvo2f985d8c",
  },
  {
    id: "aHR0cHM6Ly9yc3MuYWNhc3QuY29tL3VucmF2ZWxlZA",
    author: "discovery+",
    title: "Unraveled:Long Island Serial",
    cover:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfRq-8E3-Vnt3-wCzTkj2je0b-YPioSKVEYs90me0ZMvxBNSY",
  },
  {
    id: "aHR0cDovL2ZlZWRzLmZlZWRidXJuZXIuY29tL2ZlZWRidXJuZXIvTmR3bA",
    author: "Vox",
    title: "The Ezra Klein Show",
    cover:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSqTGrg_JPenr_edYkuK6Al9DzpyyFAMoiyd1jsp0pNHhQCNjk",
  },
  {
    id: "aHR0cHM6Ly9mZWVkcy5tZWdhcGhvbmUuZm0vc3R1ZmZ5b3VzaG91bGRrbm93",
    title: "Stuff You should Know",
    author: "IHeartRadio",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGRJf8KoRq8gfy_jpVgqDgtE-eKyXpHOpFEHlAmVqW1L2uOqo",
  },
  {
    id: "aHR0cHM6Ly9mZWVkczIuZmVlZGJ1cm5lci5jb20vdGVkdGFsa3NfYXVkaW8",
    author: "TED Talks Daily",
    title: "TED",
    cover:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvWRhYcJbWw4w6a9CFskUnb0-McmhM1QTyfq0omvEuVZyrA6Y",
  },
  {
    id: "aHR0cHM6Ly9mZWVkcy5tZWdhcGhvbmUuZm0vc3R1ZmZ5b3VzaG91bGRrbm93",
    title: "Stuff You should Know",
    author: "IHeartRadio",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGRJf8KoRq8gfy_jpVgqDgtE-eKyXpHOpFEHlAmVqW1L2uOqo",
  },
  {
    id: "aHR0cHM6Ly9mZWVkczIuZmVlZGJ1cm5lci5jb20vdGVkdGFsa3NfYXVkaW8",
    author: "TED Talks Daily",
    title: "TED",
    cover:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvWRhYcJbWw4w6a9CFskUnb0-McmhM1QTyfq0omvEuVZyrA6Y",
  },

  {
    id: "aHR0cDovLzdnb29kbWludXRlcy5saWJzeW4uY29tL3Jzcw",
    author: "Clyde Lee Denis",
    title: "7 Good Minutes",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoT9wuGi5f8aUnktGKqPbGdpoft9Bp64Z03Mp51UHkFLfK4Ubn",
  },
  {
    id: "aHR0cHM6Ly9qb2Vyb2dhbmV4cC5saWJzeW4uY29tL3Jzcw",
    author: "Joe Rogan",
    title: "The Joe Rogan Experience",
    cover:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtGZTG2sfgKgC6CaZlVkepJkHLlTAFsuvc1df7uztSp0JSpmiw",
  },
  {
    id: "aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2ZyZWFrb25vbWljcy1yYWRpbw",
    author: "Freakonomics Radio + Stitcher",
    title: "Freakonomic Radio",
    cover:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZjUqEeWy3uxifXhfyI4zLCpvbxU5ZLllhjyE_sThNAwHT40I",
  },
  {
    id: "aHR0cHM6Ly9mZWVkcy5tZWdhcGhvbmUuZm0vcmVwbHlhbGw",
    author: "Gimlet",
    title: "Reply All",
    cover:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgqslFcpgTF4CeqTZe6OkHyP_2ckezsIviYY9SM_HzorC2lKok",
  },

  {
    id: "aHR0cHM6Ly9mZWVkcy5ucHIub3JnLzUxMDI5OC9wb2RjYXN0LnhtbA",
    author: "NPR",
    title: "TED Radio Hour",
    cover:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQTPj2qVxqA9KZP94CE-0RglzYmHc-9edPOGqbpjlltlHqMaok",
  },
  {
    id: "aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL3RoZS1kYWlseQ",
    author: "The New York Times",
    title: "The Daily",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZt805JMihjChbsRmtabBwt86kFvGcdEdzg2Fg-rP_hPUo6We",
  },
  {
    id: "aHR0cHM6Ly9mZWVkcy5ucHIub3JnLzUxMDI4OS9wb2RjYXN0LnhtbA",
    author: "NPR",
    title: "Planet Money",
    cover:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeQypKxL8Qzjf0n28K0uUD-iVMtxcHx-G_NspdBSTCJcZv-YWh",
  },
  {
    id: "aHR0cHM6Ly9qb2Vyb2dhbmV4cC5saWJzeW4uY29tL3Jzcw",
    author: "Joe Rogan",
    title: "The Joe Rogan Experience",
    cover:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtGZTG2sfgKgC6CaZlVkepJkHLlTAFsuvc1df7uztSp0JSpmiw",
  },
  {
    id: "aHR0cHM6Ly9mZWVkcy5ucHIub3JnLzM0NDA5ODUzOS9wb2RjYXN0LnhtbA",
    author: "NPR",
    title: "Wait Wait Don't tell Me!",
    cover:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkmRFEVhn8F_uE_ukJcvSu3SBctAK07ZKXEn00clPmtfC3KxoJ",
  },
  {
    id:
      "aHR0cHM6Ly93d3cub21ueWNvbnRlbnQuY29tL2QvcGxheWxpc3QvYWFlYTRlNjktYWY1MS00OTVlLWFmYzktYTk3NjAxNDY5MjJiLzBhNjg2ZjgxLTBlZWItNDU1Yi05OGJlLWFiMGQwMDA1NWQ1ZS8xZmFiMmIwYi1hN2YwLTRkNzEtYmY2ZC1hYjBkMDAwNTVkNmMvcG9kY2FzdC5yc3M",
    author: "Team Coco & Earwolf",
    title: "Conon O'Brien Needs a Friend",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSfHG4Hb0Cbz4cZSb_syTrBqwXltb3i-La779QE549yMC81vI",
  },
  {
    id: "aHR0cHM6Ly9mZWVkczIuZmVlZGJ1cm5lci5jb20vdGVkdGFsa3NfYXVkaW8",
    author: "TED Talks Daily",
    title: "TED",
    cover:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvWRhYcJbWw4w6a9CFskUnb0-McmhM1QTyfq0omvEuVZyrA6Y",
  },
  {
    id: "aHR0cDovLzdnb29kbWludXRlcy5saWJzeW4uY29tL3Jzcw",
    author: "Clyde Lee Denis",
    title: "7 Good Minutes",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoT9wuGi5f8aUnktGKqPbGdpoft9Bp64Z03Mp51UHkFLfK4Ubn",
  },
  {
    id:
      "aHR0cHM6Ly93d3cub21ueWNvbnRlbnQuY29tL2QvcGxheWxpc3QvOWI3ZGFjZGYtYTkyNS00Zjk1LTg0ZGMtYWM0NjAwMzQ1MWZmLzVjZDc0MTNjLWIzNDEtNDkzZi1iZjQ2LWFjYjUwMDM2NDE0MS82YjI1NDBkNC1lMGIyLTQyZjctYTYxYS1hY2I1MDAzNjQxNWEvcG9kY2FzdC5yc3M",
    author: "Rob Dial and Kast Media",
    title: "The Mindset Mentor",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15_HV7kHZp4BI9I2BGQPZN0nVraBBLKwDjXXYHiOWaJNtsyE",
  },
  {
    id: "aHR0cHM6Ly9mZWVkcy5tZWdhcGhvbmUuZm0vc2NpZW5jZXZz",
    author: "Gimlet",
    title: "Science VS",
    cover:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQQ0VqAkq8JoEfeVtGCERdnlUYiB8_u316Dvd4u1rdNBZBwws",
  },
  {
    id: "aHR0cHM6Ly9mZWVkcy5ucHIub3JnLzUxMDMzOC9wb2RjYXN0LnhtbA",
    author: "NPR",
    title: "Life KIT",
    cover:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSG6uKndESrJEjxlaXLItlsusxeA7-rAueRKjJlypmFMCYMsXiP",
  },
  {
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUlwm9dbYwq3nT82OUglkfwzNRZdPt0k3cTMrx5zkYHFBa8w1",
    id: "aHR0cDovL2ZlZWRzLndueWMub3JnL2RlYXRoc2V4bW9uZXk",
    author: "WNYC Studios",
    title: "Death,Sex & Money",
  },
  {
    cover:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnyORpivCsWayfQQhEnh8yiHU4zAEtM0q07IVUY2lIgKVQ0jg",
    id: "aHR0cDovL2Nob29zZWZpLmxpYnN5bi5jb20vcnNz",
    author: "The unstuck Network",
    title: "ChooseFI",
  },
  {
    cover:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpuCSZwgccEewjfJgN_dKJ5-StytXqvRYF5DoVdbnmA7AkopLn",
    id: "2ahUKEwjuxtqgtvLuAhV243MBHdXfD1sQjs4CKAh6BQgBEIIB",
    author: "Eric Siu & Neil Pate",
    title: "Marketing School - Digital Marketing and Online Marketing Tips",
  },
];

module.exports = data;
