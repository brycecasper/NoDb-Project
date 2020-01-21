let posts = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {nameInput, proteinInput, caloriesInput} = req.body;
        const newFood = {
            id,
            nameInput,
            proteinInput,
            caloriesInput 
        }
        posts.push(newFood);
        id++;
        res.status(200).send(posts);
    },
    read: (req, res) => {
        res.status(200).send(posts);
    },
    update: (req, res) => {
        const {nameInput, proteinInput, caloriesInput} = req.body;
        const updateId = req.params.id;
        const postIndex = posts.findIndex(post => post.id === +updateId);
        posts[postIndex] = {
            id: +updateId,
            nameInput: nameInput || posts[postIndex].nameInput,
            proteinInput: proteinInput || posts[postIndex].proteinInput,
            caloriesInput: caloriesInput || posts[postIndex].caloriesInput
        };
        res.status(200).send(posts);
    },
    delete: (req, res) => {
        const deleteId = req.params.id;
        let postIndex = posts.findIndex(post => post.id === +deleteId);
        posts.splice(postIndex, 1);
        res.status(200).send(posts);
    }
}