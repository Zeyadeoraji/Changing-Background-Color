let button = document.querySelector("button");
      let body = document.querySelector("body");
      let color = [
        "red",
        "green",
        "black",
        "blue",
        "pink",
        "#c8c8c8da",
        "#FF8000",
        "#FFA000",
        "Aqua",
        "aquamarine",
        "blueviolet",
        "brown",
        "burlywood",
        "chocolate",
        "coral",
        "cyan",
        "gold",
        "grey",
        "greenyellow",
        "salmon",
      ];
      let index = 0;
      button.addEventListener("click", changeColor);

      function changeColor() {
        document.getElementsByTagName("body")[0].style.background =
          color[index++];

        if (index > color.length - 1) index = 0;
      }