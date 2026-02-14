import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams, Link } from "react-router";
import api from "../lib/axios";
import { LoaderIcon, ArrowLeftIcon, Trash2Icon } from "lucide-react";
import { isAuthenticated } from "../lib/utilis";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/signin");
    }
  }, []);

  const handleSave = async (e) => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("PLease add a title or content");
      return;
    }
    setSaving(true);
    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };
  const handlesDelete = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully");
      navigate("/");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };
  console.log(note);
  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to={"/"} className="btn btn-ghost mb-6">
              <ArrowLeftIcon className="size-5" />
              Back to Notes
            </Link>
            <button
              className="btn btn-error btn-outline"
              onClick={(e) => {
                handlesDelete(e, note._id);
              }}
            >
              <Trash2Icon className="size-4" />
              Delete Note
            </button>
          </div>
          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Note Title"
                  value={note.title}
                  onChange={(e) => {
                    setNote({ ...note, title: e.target.value });
                  }}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-32"
                  placeholder="Write your note here..."
                  value={note.content}
                  onChange={(e) => {
                    setNote({ ...note, content: e.target.value });
                  }}
                />
              </div>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={handleSave}
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
