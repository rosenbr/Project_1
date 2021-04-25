<<<<<<< HEAD
// const mongoose = require("mongoose");
const Recipes = [
    {name: "Chicken Alfredo", img: "https://howtocook.eu.org/wp-content/uploads/2020/02/The-30-Minute-Easy-Chicken-Alfredo.jpg", ingredients: "Bacon ipsum dolor amet incididunt in fatback tongue tenderloin bresaola ut do short loin doner. Consequat landjaeger leberkas culpa nisi. Labore chicken ipsum ham hock, fatback corned beef brisket nostrud dolore shankle salami. Shankle shank porchetta, enim capicola sed commodo incididunt venison chicken. Minim drumstick exercitation nulla turkey fugiat pariatur occaecat ut dolor. Reprehenderit rump ad landjaeger nulla salami commodo pancetta meatloaf in filet mignon.", directions: " do the thing"},
    {name: "Spaghetti", img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/puttanesca-cfb4e42.jpg?quality=90&resize=440,400", ingredients: "Bacon ipsum dolor amet ut andouille short loin frankfurter nisi chicken duis ribeye. Pork loin turducken ham hock proident tempor eu qui short ribs beef ribs frankfurter sausage turkey. Magna labore ad pancetta. Pancetta sint ipsum biltong in leberkas ullamco boudin laboris buffalo short ribs drumstick veniam. In tri-tip kielbasa jowl. Pig qui ball tip ham ground round nostrud proident. Nisi adipisicing beef ribs, beef ut turkey mollit corned beef.", directions: "do the stuff"},
    {name: "Chili", img: "https://media.istockphoto.com/photos/mexican-carnita-street-tacos-with-beer-on-slate-table-setting-picture-id638949916?k=6&m=638949916&s=170667a&w=0&h=JbwCwWw3HR5psFf-nyIHW9pdyNiPyAaMFA4leF3KAhQ=", ingredients: "Bacon ipsum dolor amet shankle in irure ham andouille veniam. Consectetur anim chuck drumstick mollit sirloin tri-tip. Proident duis veniam id, turducken pork belly adipisicing tempor pig tri-tip consectetur aliquip labore shankle swine. Cupidatat minim commodo kielbasa kevin. Drumstick chuck in burgdoggen salami eiusmod, hamburger culpa in nostrud aute sirloin reprehenderit t-bone chicken", directions: "make the damned food already"},
]



module.exports = Recipes;
=======
const mongoose = require("mongoose");

const articleSchema = new mongoose (
    {
        body: {type: String, required: true}
    },
    {
        timmestamps: true,
    }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Articles;
>>>>>>> c8afd0dcc94ad2ba5c0c61a561d8d53c1e0b6ca8
