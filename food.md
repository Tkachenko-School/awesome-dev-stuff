

it's actually part of link, that i shared before, but it can be a separated "entity" and can help to some food blog starters
- https://github.com/ChickenKyiv/awesome-recipe-websites/blob/master/README.md#quora

Just an interesting and fresh article
- https://futurism.com/ai-food-research-better-recipes


Today received a questions from a ML engineer.
EU:
https://food.opendata.ch/
https://www.foodrepo.org/
https://food.opendata.ch/#fooddata

https://www.europeandataportal.eu/data/?#/datasets?locale=en&query=food

and I was asked about diets/nutritional stuff, so here some inner links to it as well.
https://github.com/ChickenKyiv/awesome-food-collection-machine-learning/blob/master/README.md#healthdataun-processed-too
https://github.com/vsa-partners/fda-nutrition-facts-label
https://github.com/Suppervisor/react-fda-nutrition-facts
https://github.com/ChickenKyiv/awesome-food-open-source/blob/master/diets.md


At this repository i'm collecting some creative assets that we have.
For example, we have basic sitemaps for recipe/meal planning projects, diffferent UI designs, etc.
https://github.com/ChickenKyiv/creative


====

Cash: Deals => increase sign ups, make an additional money by having an intersections, etc.

Developers: can sell a small stuff that they building
Job boards with people, related to food tech background. Other lists of links...
Testers can write a tests, as libraries
Markupers can write blocks/pages, that can be user/purchased/changed.

Open-source section with listing of projects that are part of our alliance, that may be easily changed and used later.

============




===

Sd -> Elnur -> tests as similar function, that we have it at `fetch`. Just have a separated file for it for a first time. If it(when) it will work, let's back to discussion and maybe upgrade tests then(tests that we have).

Stage1: file that have "isset" test: with checking if it works well + info
Stage2: replace that function at our load of files at different files.
Stage3: have one file, that have all of that calls for all files + remove if from separated files.

Question: Does all files inside one folder (new files) or how we are located them now?
Can you, Elnur explain it at Readme file, with Vadim help for me?

--
Ronnie -> at Readme add explanation on how we are located and how it works?
---

Vadim -> also a header should work at showcase, make a few commits in order to see how header component works.

it might break everything. So we can easily see what is happening, where it happening and how.

---

React-pdf: issue with fetch(iife format is not working for us).
I rollover an old version, so it should work.

Header is missing with Menu Component. Maybe it's a good test for Ronnie?
But only if he can handle it(I think Vadim should do it)

---

SD -> Wahaj -> goal 1 is to finish measurements + autogeneration + test.
It sjould work ideally (please get confirmation from Vadim about how it actually works at fetch after update/publish/upgrade).

---

SD -> Wahaj -> I think maybe   that we need to add 'type' to Units? I'm not 100% sure about it,
if you have troubles in matching stuff. together (one object with another) --> we need it then.
)

SD Readme: where is tests?
Json lint -> how to run it and use? How to run build on sd? <created>

----------

Vadim: we need to move some tests from `fetch`/
That task will do Elnur && Ronnie. you will need to figure out together what exactly needed to be moved, how, etc.

Plz create a separated task/ add link to it here)
where you'll list all codelines that should be moved. <created>?? Where


--------

Ibrahim & Ahmad: fake-api + pagination + grocery list POST + validation(only backend)

---------

Sd -> Wahaj -> other files to generate files, that you needed.

----

Elnur have created a lot of new files: list of PRs. We need to figure out what is todo.
Main question is: how to move from that datafiles, into a stable solution, that can be used at `fetch`

files with imports looks very long. deal with it via babel.

---

SD -> Readme -> explanation, related to module resolver + add alias, related to tests(Wahaj)

---
SD -> tests replace paths with module resolver

SD -> tests with functions(as fetch) Wahaj

SD -> move files, created by Elnur (cup1,js, teaspoon.js...) into
src/data/folder name and update file paths at tests as well
Elnur

---

publish latest sd version to npm, upgrade at 'fetch' and check if it works. Especially measurement sysyem + autogeenerated files.
---
Display data
that was get by Wahak + Elnur in loops at sd first -> index.js + more them later to fetch.

---


Just simple functions, that can display data <created> from loops in console.log.


---

SD  развитие и переносов тестов
SD создание простіх json файлов
SD переос, создание методов, как генерировать длинніе, связанніе с файлами. вначале
GQL, GS + Showcase, CK

---

Fetch
 removingour get methods from projects. (Each should be as separated PR)
 Start from GS. later run `npm run tests` & fix bugs.
 So it will be like a 3 iterations here.
 - loop at sd, tests at sd
 moving tests at sd, and different variations
 - adding if's at jsonlint, so we can catch some problems.

 - tests for Helper.js -> just rename it and run tests!

 Creating a new tasks for novices.

 Maybe we need to have some separated tasks, where Vadim can chat with them, about what they can do and will decide on his own, what tasks they can cover or try to cover?

 Moving logic of tasks that I have at Groceristar repository at sd.
