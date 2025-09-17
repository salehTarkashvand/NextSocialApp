
import PostForm from "@/components/post-form";
import {createPost} from "@/actions /action";

export default function NewPostPage() {
  
  

  return <PostForm action={createPost} />;
}
