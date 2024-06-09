$(document).ready(function () {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#FFBD33",
    "#8D33FF",
    "#33FFF6",
    "#F633FF",
    "#33FFBD",
    "#FFC433",
    "#FF5733",
    "#33FFB5",
    "#FF33E6",
    "#57FF33",
    "#3375FF",
    "#FF8D33",
    "#33FFFC",
    "#B533FF",
    "#FF3333",
    "#33FF8D"
  ];

  const quotesData = [
    {
      quote: "The only way to prove that you’re a good sport is to lose.",
      author: "Ernie Banks"
    },
    {
      quote: "Winning isn’t everything, but wanting to win is.",
      author: "Vince Lombardi"
    },
    {
      quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky"
    },
    {
      quote: "The harder the battle, the sweeter the victory.",
      author: "Les Brown"
    },
    {
      quote: "Champions keep playing until they get it right.",
      author: "Billie Jean King"
    },
    {
      quote: "It’s not whether you get knocked down; it’s whether you get up.",
      author: "Vince Lombardi"
    },
    {
      quote:
        "Never let the fear of striking out keep you from playing the game.",
      author: "Babe Ruth"
    },
    {
      quote: "Success is where preparation and opportunity meet.",
      author: "Bobby Unser"
    },
    {
      quote: "Pain is temporary. Quitting lasts forever.",
      author: "Lance Armstrong"
    },
    {
      quote:
        "You can’t put a limit on anything. The more you dream, the farther you get.",
      author: "Michael Phelps"
    }
  ];

  let randomQuote = quotesData[0].quote;
  let randomQuoteAuthor = quotesData[0].author;

  function changeQuote() {
    let randomQuoteIndex = Math.floor(Math.random() * quotesData.length);
    randomQuoteAuthor = quotesData[randomQuoteIndex].author;
    randomQuote = quotesData[randomQuoteIndex].quote;
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    $("#text").fadeOut(1000);
    $("#author").fadeOut(1000);
    $("body").css({
      "background-color": randomColor,
      transition: "background-color 2s"
    });

    setTimeout(function () {
      $("#text h1").text(randomQuote);
      $("#author h4").text(randomQuoteAuthor);
      $("#text").css({ color: randomColor });
      $("#author").css({ color: randomColor });
      $("#text").fadeIn(1000);
      $("#author").fadeIn(1000);
    }, 1000);
  }

  $("#tweet-quote").on("click", function () {
    $(this).attr(
      "href",
      "https://twitter.com/intent/tweet?hashtags=CodingCoolThings&related=freecodecamp&text=" +
        encodeURIComponent(randomQuote + " " + randomQuoteAuthor)
    );
  });

  $("#tumblr-quote").on("click", function () {
    window.open(
      "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=CodingCoolThings,freecodecamp&caption=" +
        encodeURIComponent(randomQuoteAuthor) +
        "&content=" +
        encodeURIComponent(randomQuote) +
        "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
    );
  });

  $("#new-quote").on("click", changeQuote);
});
