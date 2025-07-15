import Note from "../models/Notes.js"
export async function getallnotes (_,res){
  try{
    const notes = await Note.find({}).sort({createdAt : -1})
    res.status(200).json(notes)
  }
  catch(error){
    console.log("Error in GetallNotes",error)
    res.status(500).json({message:error.message}) 
  }
 }

export async function getanote(req,res){
  try{
    const note = await Note.findById(req.params.id)
    if(!note) return res.status(404).json({message:"Note not found"})
    res.status(200).json(note)
  }
  catch(error){
    res.status(404).json({message:"Error in getanote controller"})
    console.log("Error in Getanote",error)
  }
}
export async function createnote  (req,res){

  try{
    const {title,content} = req.body
    const newnote = new Note({title,content})
    
    await newnote.save()
    res.status(201).json({message:"Note created successsfulyy"})
  }
  catch(error){
    console.log("Error in createnote")
    res.status(500).json({message:error.message})
  }
 }

export async function updatenote (req,res){
  try{
    
    const {title,content} = req.body
    const updatednote = await Note.findByIdAndUpdate(req.params.id,{title,content},
      {new: true}
    )

    if(!updatednote) return res.status(404).json({message:"Note not found"})
    res.status(200).json(updatednote)
  }
  catch(error){
  console.log("Error in Noteupdate")
    res.status(500).json({message:error.message})
  }
 }

export async function deletenote  (req,res){
  try{
    const deletenote = await Note.findByIdAndDelete(req.params.id)
    if (!deletenote) return res.status(404).json({message:"Note not found"})
    res.status(200).json(deletenote)
  }
  catch(error){
 console.log("Error in deleting the note")
    res.status(500).json({message:error.message})
  }
 }