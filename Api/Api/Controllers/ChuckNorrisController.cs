using Api.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChuckNorrisController : Controller
    {
        private readonly HttpClient _httpClient;

        public ChuckNorrisController()
        {
            _httpClient = new HttpClient();
        }


        // GET: ChuckNorrisController
        [HttpGet("random")]
        public async Task<IActionResult> TheRandomJokeValue()
        {
            var jokeResponse = await _httpClient.GetAsync("https://api.chucknorris.io/jokes/random");
            var result = await jokeResponse.Content.ReadFromJsonAsync<ChuckNorrisRandomViewModel>();

            return Ok(result);
        }

        [HttpGet("categories")]
        public async Task<IActionResult> Categories()
        {
            var jokeResponse = await _httpClient.GetAsync("https://api.chucknorris.io/jokes/categories");
            var result = await jokeResponse.Content.ReadFromJsonAsync<string[]>();

            return Ok(result);
        }

        [HttpGet("joke")]
        public async Task<IActionResult> TheRandomJokeValue([FromQuery] string category, int jokeLimit)
        {
            
            var resultJokes = new List<ChuckNorrisRandomViewModel>();
            var jokesToGetCount = jokeLimit;
            var timesTried = 0;
            var timesToTry = 5;

            do
            {
                var jokeTasks = new List<Task<ChuckNorrisRandomViewModel>>();
                for (var i = 0; i < jokesToGetCount; i++)
                {
                    var asyncResponse = ChuckNorrisCategoryJoke(category);
                    jokeTasks.Add(asyncResponse);
                }

                var jokes = await Task.WhenAll(jokeTasks);
                var uniqueJokes = jokes.DistinctBy(i => i.value);
                resultJokes = resultJokes.Concat(uniqueJokes).DistinctBy(i => i.value).ToList();
                jokesToGetCount = jokeLimit - resultJokes.Count();
                timesTried++;

            } while (jokesToGetCount > 0 && timesTried < timesToTry);
           
            return Ok(resultJokes);
        }

        private async Task<ChuckNorrisRandomViewModel> ChuckNorrisCategoryJoke(string category) 
        {
            var jokeResponse = await _httpClient.GetAsync($"https://api.chucknorris.io/jokes/random?category={category}");
            var result = await jokeResponse.Content.ReadFromJsonAsync<ChuckNorrisRandomViewModel>();
            return result;
        }
    }
}
