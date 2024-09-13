const target = document.querySelectorAll(".what_new_box");
const target2 = document.querySelectorAll(".liner");
const target3 = document.querySelectorAll(".cs_card");

/** What's newの新着ボックスの仕掛けのための関数 */
function observed(x) {
  x.getElementsByClassName("what_new_box_anim")[0].classList.add("observed");
  x.getElementsByClassName("what_new_box_main")[0].classList.add("observed2");
  x.classList.add("observed3");
  x.getElementsByClassName("what_new_box_anim")[0].classList.remove(
    "non_observed"
  );
  x.getElementsByClassName("what_new_box_main")[0].classList.remove(
    "non_observed2"
  );
}

/** What's newの新着ボックスの仕掛けのための関数 */
function non_observed(x) {
  x.getElementsByClassName("what_new_box_anim")[0].classList.add(
    "non_observed"
  );
  x.getElementsByClassName("what_new_box_main")[0].classList.add(
    "non_observed2"
  );
  x.classList.remove("observed3");
  x.getElementsByClassName("what_new_box_anim")[0].classList.remove("observed");
  x.getElementsByClassName("what_new_box_main")[0].classList.remove(
    "observed2"
  );
}

/** 枠線animationの仕掛けのための関数 */
function observed2(x) {
  x.getElementsByClassName("liner1")[0].classList.remove(
    "horizontal_non_observed"
  );
  x.getElementsByClassName("liner1")[0].classList.add("horizontal_observed");
  x.getElementsByClassName("liner2")[0].classList.remove(
    "vertical_non_observed"
  );
  x.getElementsByClassName("liner2")[0].classList.add("vertical_observed");
  x.getElementsByClassName("liner3")[0].classList.remove(
    "horizontal_non_observed"
  );
  x.getElementsByClassName("liner3")[0].classList.add("horizontal_observed");
  x.getElementsByClassName("liner4")[0].classList.remove(
    "vertical_non_observed"
  );
  x.getElementsByClassName("liner4")[0].classList.add("vertical_observed");
}

/** 記事一覧の右から伸びてくるやつのための関数 */
function observed3(x) {
  x.getElementsByClassName("cs_card_anim")[0].classList.add("observed4");
  x.getElementsByClassName("cs_card_main")[0].classList.remove("non_observed2");
  x.getElementsByClassName("cs_card_main")[0].classList.add("observed2");
  x.classList.add("observed3");
}

/** 記事一覧の右から伸びてくるやつのための関数 */
function non_observed3(x) {
  x.getElementsByClassName("cs_card_anim")[0].classList.remove("observed4");
  x.getElementsByClassName("cs_card_main")[0].classList.remove("observed2");
  x.getElementsByClassName("cs_card_main")[0].classList.add("non_bserved2");
  x.classList.remove("observed3");
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

const callback2 = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observed2(entry.target);
    }
  });
};

const callback3 = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observed3(entry.target);
    } else {
      non_observed3(entry.target);
    }
  });
};

const io2 = new IntersectionObserver(callback2, options);

io2.observe(target2[0]);

const io3 = new IntersectionObserver(callback3, options);
[...target3].forEach((targetelement) => {
  io3.observe(targetelement);
});
