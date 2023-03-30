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

https://velog.io/@juno7803/Recoil-Recoil-200-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0

- Auth? - use firebase to let it work.
  https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
  https://www.freecodecamp.org/news/use-firebase-authentication-in-a-react-app/

https://www.freecodecamp.org/news/how-to-use-recoil-for-state-management-in-your-react-projects/

filter:
https://recoiljs.org/docs/basic-tutorial/selectors/

https://blog.logrocket.com/simple-state-management-react-recoil/

# Filter

https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
! - fetch data first, then handle the fetched data.

-

=======
https://velog.io/@dev-sjko/react-node-js-naver-book-search-api
https://developers.naver.com/docs/common/openapiguide/apilist.md#%EB%B9%84%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EB%B0%A9%EC%8B%9D-%EC%98%A4%ED%94%88-api (book)

===
!
https://velog.io/@dev-sjko/react-node-js-naver-book-search-api
https://msyu1207.tistory.com/entry/React%EB%A1%9C-%EC%98%81%ED%99%94-%EC%A0%95%EB%B3%B4%EB%A5%BC-%EA%B2%80%EC%83%89%ED%95%B4%EB%B3%B4%EC%9E%90-%EB%91%90%EB%B2%88%EC%A7%B8-%EB%84%A4%EC%9D%B4%EB%B2%84-API-%EC%82%AC%EC%9A%A9-CORS-%EC%84%A4%EC%A0%95-%ED%95%98%EA%B8%B0

skeleton
https://www.youtube.com/watch?v=ZVug65gW-fc&ab_channel=WebDevSimplified

pagination
https://nordicapis.com/everything-you-need-to-know-about-api-pagination/
https://blog.naver.com/PostView.naver?blogId=kimhecan&logNo=222451504235

react hook form - react hook form checkbox track
checkbox : https://velog.io/@jmcode/react-hook-form%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9Ccheckbox-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
https://stackoverflow.com/questions/71793608/react-hook-form-set-checkbox-to-checked-state
https://tech.osci.kr/2023/01/02/introduce-react-hook-form/

react recoil async (clean)

- https://songjang.tistory.com/45
- https://velog.io/@2ast/React-Recoil-selector%EB%A1%9C-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%9E%91%EC%97%85-%EC%88%98%ED%96%89%ED%95%98%EA%B8%B0
  https://velog.io/@yiyb0603/Recoil-Selector-useRecoilValueLoadable%EC%9D%84-%ED%99%9C%EC%9A%A9 ! (CUSTOM HOOK REACT SIMPLE VERSION)

  react hook form and recoil

- https://tech.inflab.com/202207-rallit-form-refactoring/react-hook-form/

sign in , signup page? (might can achieve with recoil, with no firebase)

- https://velog.io/@hyo123/react-hook-form-%ED%8C%8C%EC%9D%BC%EC%97%85%EB%A1%9C%EB%93%9C
- https://codesandbox.io/s/recoil-react-hook-form-rmhoy4?file=/pages/confirm.tsx (structure)
- https://freestrokes.tistory.com/166 (same as above)

  Q. With recoil, store loaded data from api and apply filter feature to it and store its result? (ask later)

- https://recoiljs.org/docs/guides/asynchronous-data-queries/

https://blog.logrocket.com/crud-with-facebook-recoil/
https://github.com/diogosouza/react-recoil-crud

core: recoil and api call (might use recoil only rather than react-query)
https://javascript.plainenglish.io/getting-to-know-recoil-initializing-and-maintaining-react-application-state-with-asynchronous-c5c3eb114c39

# final summary for Friday: Project library

- load data from naver api - book first. Use axios. (Do not use react-query at this point).
- add search bar, and in that input section, interact and link it with loaded data. (Do not use recoil at this point).
- (once search bar composition is complete), add filter feature. Do not use firebase.
- (once filter feature is made), THEN make invisible borderline table to display the list.

So far, (1) api data (2) search bar UI (3) search bar can load and print the loaded data on page. (4) filter should be working and placed on right side.

- (After making filter,) apply checkbox feature to the searchResult book list.
- user should tick favourite book, and mark it with tickbox. Once it is done, should be stored in localStorage or state.
- (by using stored information, that ticked book by user), this can be opened and checked from 'Bookmark' or 'Home(at bottom)' page.

So far, (1) checkbox reflection with react-hook-form (2) use recoil to reflect the changes of checkbox on searchResult to Bookmark or Home page. (OK)
<<USING RECOIL TO HANDLE ASYNC IS OK!>>

- finally, add account login page. This can be turned on once page is loaded at the beginning (may use firebase to achieve this goal).

Then double check the library page I benchmark, and see how to solve the CSS.

- For CSS, do not use dropdown menu since this time, the page will not have that many pages. Or, place only one drop down menu.
- Insert skeleton transition effect. (start from loading(waiting) for searchResult, then once it is over, then try showing the finished effect of its transition like the library page).
- Other than that, follow the main structure of the page I benchmark.

May insert animation for the Home title only.

Recoil - async data queries, add to an array instead of overwriting
https://github.com/facebookexperimental/Recoil/discussions/2136?sort=top

https://usage.tistory.com/155 - do not fuse recoil and react-query. Both need to be independent.
