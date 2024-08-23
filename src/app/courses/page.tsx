
import CourseVideos from "@/app/components/CourseVideos.jsx"
const page = () => {
    return (
        <section className="h-[90vh] w-full bg-secondary">
            <CourseVideos videoUrl={"https://www.youtube.com/watch?v=Q6G-J54vgKc"} />
        </section>
    )
}

export default page