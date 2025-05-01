obj = [
    {
        img:"blog_assests/Image.png",
        title: "The Ultimate Guide to Healthy Eating: Simple Steps for a Better You",
        paragraph: "Learn the fundamentals of healthy eating, including balanced nutrition, portion control, and practical tips to improve your diet without feeling restricted.",
        writer: "John Doe",
        date: "2023-10-01"
    }, {
        img:"blog_assests/Image2.png",
        title: "10 Easy and Delicious Recipes for Busy Weeknights",
        paragraph: "Discover quick and tasty recipes that are perfect for busy weeknights, making healthy cooking a breeze.",
        writer: "Jane Smith",
        date: "2023-10-02"
    }, {
        img:"blog_assests/Image3.png",
        title: "The Benefits of Mindful Eating: How to Enjoy Your Food More",
        paragraph: "Explore the concept of mindful eating and how it can enhance your relationship with food, leading to better digestion and satisfaction.",
        writer: "Emily Johnson",
        date: "2023-10-03"
    }, {
        img:"blog_assests/Image4.png",
        title: "Understanding Food Labels: A Guide to Making Informed Choices",
        paragraph: "Learn how to read and interpret food labels, empowering you to make healthier choices at the grocery store.",
        writer: "Michael Brown",
        date: "2023-10-04"
    }, {
        img:"blog_assests/Image5.png",
        title: "The Science of Nutrition: What You Need to Know",
        paragraph: "Delve into the science behind nutrition, including macronutrients, micronutrients, and their roles in maintaining health.",
        writer: "Sarah Wilson",
        date: "2023-10-05"
    }, {
        img:"blog_assests/Image6.png",
        title: "Healthy Snacking: Tips and Ideas for Guilt-Free Munching",
        paragraph: "Discover healthy snack options and tips to satisfy your cravings without derailing your diet.",
        writer: "David Lee",
        date: "2023-10-06"
    }
]
blogContainer = document.querySelector(".sec2>.cards");
for (let i = 0; i < obj.length; i++) {
    blogContainer.innerHTML += `<div class="blog-card">
            <img src="${obj[i].img}" alt="">
            <div class="card-content">
              <h3>${obj[i].title}</h3>
              <p>
                ${obj[i].paragraph}
              </p>
              <div class="id-details">
                <div class="img"></div>
                <p>${obj[i].writer}</p>
                <p>,</p>
                <p>${obj[i].date}</p>
              </div>
            </div>
          </div>`;
}