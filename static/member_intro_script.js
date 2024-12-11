const target = document.querySelectorAll(".box-parent");

/** メンバー紹介ボックスの仕掛けのための関数 */
function observed(x) {
  x.children[1].classList.add("observed3");
  x.children[0].classList.remove("non_observed5");
  x.children[0].classList.add("observed5");
}

/** メンバー紹介ボックスの仕掛けのための関数 */
function non_observed(x) {
  x.children[1].classList.remove("observed3");
  x.children[0].classList.remove("observed5");
  x.children[0].classList.add("non_observed5");
}

const options = {
  root: null,
  rootMargin: "-50% 0px",
  threshold: 0,
};

/**交差オブザーバーにより、対象物が画面の中央に来たら、アニメーションが始まる。 */
const callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observed(entry.target);
    } else {
      non_observed(entry.target);
    }
  });
};

const io = new IntersectionObserver(callback, options);
[...target].forEach((targetelement) => {
  io.observe(targetelement);
});
