# Basic
To avoid preventable delay in work, this time I would invest half of its time to do search and plan.
# Goal 
- make a gothic like library design, calm and silent. 
- And utilise react-hook-form, 
- react query(to manage data fetching and caching in react), 
- use recoil(as state management tool, instead of redux this time). 
- Do not use props. Use typescript.
- assume to make ecommerce library page like aladin. 
- Don't make too heavy for main page. May refer how university library page looks like.

- add animated library/script to: background & partly moving jpg element(candle, clock maybe?).
https://webclub.tistory.com/621 & https://webclub.tistory.com/622, https://webclub.tistory.com/356 (size), https://www.w3.org/TR/css3-values/
https://webdesign.tutsplus.com/articles/7-css-units-you-might-not-know-about--cms-22573?ec_unit=translation-info-language


# Note
- (Unlike sticking to css like glue, seek for other new spec(skill stack) to achieve the goal.)
https://www.w3.org/TR/css3-values/

- (see whether webgl can be utilised on web, without having independent screen etc. Perhaps do it on background?)

- looks like there is book open api for Korean version. seek and test it.
https://myunji.tistory.com/472
https://blog.aladin.co.kr/openapi/6695306 (Aladin API. THIS IS IDEAL but see Kakao API as well)
https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book

# Blueprint
1. [cart] checkbox -> useForm(react-hook-form) -> watch / may use [1] react-query to handle local state. [test first!]
- https://jacegem.github.io/blog/2018/localStorage-%EC%97%90-checkbox-%EC%83%81%ED%83%9C-%EC%A0%80%EC%9E%A5/
- https://stackoverflow.com/questions/26628812/localstorage-how-to-save-a-checkbox

2. checkout -> transaction [medium priority] - may use: [1] react-query to handle api state
strongly recommended to test out this feature first (before making the whole contents)
- https://velog.io/@sayi/React-%EC%B9%B4%EC%B9%B4%EC%98%A4-%ED%8E%98%EC%9D%B4%EA%B2%B0%EC%A0%9C-%EC%A4%80%EB%B9%84
- https://velog.io/@sayi/React-%EC%B9%B4%EC%B9%B4%EC%98%A4-%ED%8E%98%EC%9D%B4%EA%B2%B0%EC%A0%9C-%EC%8A%B9%EC%9D%B8

3. pages [high priority]
- CartPage: box container, inner box, 3-4 items to display it. scrollable depending on the list of added item.
- CheckOutPage: kakaopay module will be added/addressed here.
- Home: make first screen only. Don't scroll down.
- ProductDetailPage : same as 4, 5

4. product-details [low priority]
- just as simple as coupang.

5. product-list [high priority]
- just as simple as coupang.

6. utils
- this can be tricky. Consider making this part at the end once draft is complete. Refactoring purpose only.

# Plan
<!-- Do not apply CSS till whole major features are completed. -->
- page -> home : with no css, just set up basic menu and navbar or anything necessary.
- page -> productDetailpage : (same)
- page -> list page : (same)
- page -> cart : see #1 description

- once this is done, consider adding typescript & zod. If zod is not friendly, hold it to the next opportunity.

# intermediate plan
- And test out kakaopay module. First, make up the module api from checkout.js, then address it to paymentForm.js.
- react hook form, apply checkbox, and possibly try adding isDirty if possible, maybe use this to say insufficient deposit etc? (If that so, just apply default deposit to user (don't add login feature though. No DB will be added).)
- among this process, use react-query's state management to handling axios.
- [add change of checkbox to localstorage vs react hook form.]

If this project is over too early, consider adding some dummyjson as item list, and add pagination feature.

Deadline: 7th Apr Friday. 18:00PM (KR time)

======
search, rating, list, detail

# URL OR Example
- target 1 https://hive.blog/kr/@anpigon/react-native-api
- as visual reference. Don't follow this design though. https://openlibrary.org/

https://blog.reactivesearch.io/ecommerce-search-with-react-and-elasticsearch#heading-add-reactivesearch
https://github.com/awesome-reactivesearch/booksearch/blob/master/src/App.js
https://medusajs.com/blog/5-react-based-tools-for-ecommerce-stack/



https://github.com/maziz-create/eCommerce

react-query
https://github.com/ForJessicaSake/React-Query-X-Jotai-Next-Ecommerce-Store/tree/main/src

https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms#3D_%EA%B4%80%EB%A0%A8_CSS_%EC%86%8D%EC%84%B1
https://www.youtube.com/watch?v=HZIcTZABMuc&ab_channel=%EB%85%B8%EB%A7%88%EB%93%9C%EC%BD%94%EB%8D%94NomadCoders

# somewhat plan!
- harvard library : https://library.harvard.edu/
global ui : 1. navbar menu, 2. footer 
main: (1. logo 2. navbar menu horizontal 3. personal menu 4. Main banner and 5. search bar 6. etc intro)
search result page: 1. result table, 2. filter

- Add transition effect (skelton effect till loading of aladin's DB or whatever source completes.)
- may add visitor counter measure if possible (use google analytics).

# sandbox:

https://www.freecodecamp.org/news/typescript-for-react-developers/
https://github.com/dastasoft/react-boilerplate/tree/cra-typescript
https://recoiljs.org/docs/introduction/installation/


https://javascript.plainenglish.io/set-up-eslint-and-prettier-in-a-react-typescript-app-2022-7d9a5f40b634