async function loadArticles() {
  const response = await fetch("./articles.json");
  const articles = await response.json();

  // Sort articles by descending ID
  articles.sort((a, b) => b.id - a.id);

  // Get the top 3 most recent posts
  const recentArticles = articles.slice(0, 3);

  const container = document.getElementById("articlesContainer");

  recentArticles.forEach((article) => {
    const articleHTML = `
      <section class="flex-1 flex justify-center">
        <div class="flex flex-col rounded-lg shadow-md border-2 w-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-50">
          <img class="rounded-md h-64 w-full object-cover" src="${article.image}" alt="${article.title}" />
          <div class="p-8 flex flex-col justify-start">
            <div class="flex gap-4 items-center">
              <p class="${article.teamColor} px-3 py-1 rounded-lg">${article.team}</p>
              <p class="text-gray-500">${article.date}</p>
            </div>
            <h1 class="font-bold text-4xl mt-4">${article.title}</h1>
            <p class="text-gray-600 mt-4 line-clamp-6">${article.summary}</p>
            <button class="bg-slate-200 px-3 py-2 rounded-lg mt-6 hover:bg-gray-300 transition duration-200">See More</button>
          </div>
        </div>
      </section>
    `;
    container.innerHTML += articleHTML;
  });
}

loadArticles();
