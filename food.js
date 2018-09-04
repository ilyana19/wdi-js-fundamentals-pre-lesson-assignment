var food = ['deer garden', 'dagu', 'good catch', 'hk cafe', 'kinton', 'sushi'];

for (var i = 0; i < 5; i++) {
  console.log(food[Math.floor(Math.random() * food.length)]);
}