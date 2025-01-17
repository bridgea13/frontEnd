const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());

const data = {
    professionalName: "John Doe",
    base64Image: "iVBORw0KGgoAAAANSUhEUgAA...", // Replace with a real Base64 string
    nameLink: {
        firstName: "John",
        url: "https://example.com"
    },
    primaryDescription: "Software Developer with expertise in web development.",
    workDescription1: "Experienced in front-end and back-end technologies.",
    workDescription2: "Passionate about building efficient and scalable systems.",
    linkTitleText: "Connect with me:",
    linkedInLink: {
        text: "LinkedIn",
        link: "https://linkedin.com/in/johndoe"
    },
    githubLink: {
        text: "GitHub",
        link: "https://github.com/johndoe"
    }
};


app.get('/professional', (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log('Server running at localhost:${PORT}');
});