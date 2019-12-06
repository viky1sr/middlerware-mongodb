const Murid = require("../models/murid")

exports.index = (req, res) => {
    res.render("index")
}

exports.dataMurid = async (req, res) => {
    const data = await Murid.find();
    res.render("data_murid", {
        data
    })
    console.log(data);

}

exports.addMurid = async (req, res) => {
    res.render("add_murid")
}

exports.saveMurid = async (req, res) => {
    const murid = new Murid(req.body);
    await murid.save();
    res.redirect("/data-murid");
}

exports.editMurid = async (req, res) => {
    const data = await Murid.findById(req.params.id);
    res.render("edit_murid", {
        data
    })
}

exports.deleteMurid = async (req, res) => {
    let { id } = req.params;
    await Murid.remove({ _id: id });
    res.redirect("/data-murid");
}

exports.updateMurid = async (req, res) => {
    const { id } = req.params;
    await Murid.update({ _id: id }, req.body);
    res.redirect("/data-murid")
}

exports.login = (req, res) => {
    let message = "";
    res.render("login", { message: message })
}

exports.proses = (req, res) => {
    let data = req.body
    console.log(data)
    res.send(data)
}