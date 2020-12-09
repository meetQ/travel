var fs = require("fs")

fs.readdir("../20201012", function (err, res) {

    res.forEach((item) => {
        if (item != "不重复的目录") {
            fs.mkdir("不重复的目录", (err, res) => {
                if (err) throw err
            })
        }
    })
})