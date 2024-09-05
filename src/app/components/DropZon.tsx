"use client"
import Image from "next/image";
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import axios from "axios"
import { IoMdCloudUpload } from "react-icons/io";
import { FaDeleteLeft } from "react-icons/fa6";

const DropZone = ({ setProjectImage, setProjectImageId }: { setProjectImage: any, setProjectImageId: any }) => {

    const [files, setFiles] = useState<any[]>([]);
    const [error, setError] = useState<any[]>([])
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    // catch rejected files to show the error message
    const onDrop = useCallback((acceptedFiles: any, rejectedFiles: any) => {
        // If there are any accepted files
        if (acceptedFiles.length > 0) {
            // Update the state with the new files
            setFiles(prev => [
                // Keep the existing files
                ...prev,
                // Add the new files with a preview URL
                ...acceptedFiles.map((file: any) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })

                )
            ])
        }

        setError(prev => [...prev, rejectedFiles])
    }, [])

    const removeImage = (name: string) => {
        setFiles(prev => prev.filter(file => file.name !== name))
    }

    // add restriction to the file type
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            // accept all image types
            'image/*': []
        }
    })
    const handleSubmit = async (e: any) => {
        console.log("submite clicked ")

        if (!files?.length) return



        const formData = new FormData()
        files.forEach(file => formData.append('file', file))
        formData.append('upload_preset', 'exy2m2qn')

        const url: string = process.env.NEXT_PUBLIC_CLOUDINARY_URL as string
        if (!url) {
            console.error("Cloudinary URL is not defined");
            return;
        }

        try {
            const data = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (progressEvent) => {
                    if (progressEvent.lengthComputable) {
                        const percentComplete = Math.round((progressEvent.loaded / progressEvent.total!) * 100);
                        console.log(percentComplete)
                        setUploadProgress(percentComplete);  // Update progress state
                    }
                }
            });

            console.log('Upload successful');
            setProjectImage(data.data.secure_url)
            setProjectImageId(data.data.public_id)
            setUploadProgress(0); // Reset progress after upload is complete
        } catch (error) {
            console.error('Error uploading files:', error);
        }







    }

    return (
        <>
            <form>

                {/* if there is no image uploaded render the drop zone */}
                {
                    files.length === 0 &&
                    <div {...getRootProps()}
                        className="flex flex-col items-center justify-center"
                    >
                        <IoMdCloudUpload
                            className="text-8xl hover:scale-110 transition-all duration-300"
                        />
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop files here</p> :
                                <p
                                    className=" text-center text-2xl  bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                                    click here to Insert Project image
                                    <br />
                                    or Drag and drop
                                </p>
                        }
                    </div>
                }



            </form>

            {/* render the images uploaded  */}

            <div className="">
                <div className=" ">
                    {files.map((file, index) => (
                        <div key={index} className="flex flex-col items-end">
                            <button
                                onClick={() => removeImage(file.name)}
                                className="w-auto mb-2" >

                                <FaDeleteLeft className="text-red-500 text-2xl" />
                            </button>
                            <Image
                                width={1500}
                                height={1500}
                                src={file.preview} alt={file.name}
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                {files.length > 0 &&
                    <button
                        className={
                            `mt-2 w-full py-2 px-4 ${uploadProgress === 0 ?
                                "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-blue-500  " : ""}
                            font-semibold rounded-lg shadow-md 
                            transition-all duration-300 relative overflow-hidden`
                        }
                        type="submit"
                        onClick={handleSubmit}
                    >
                        {uploadProgress > 0 ? (
                            <>
                                <div
                                    className="absolute bottom-0 left-0 w-full bg-blue-500 "
                                    style={{ height: `${uploadProgress}%`, transition: 'height 0.3s ease' }}
                                />
                                <span className="relative z-10 ">Uploading... {uploadProgress}%</span>
                            </>
                        ) : (
                            'Click to upload on Cloudinary'
                        )}
                    </button>
                }
            </div>
            {/* render the error message */}
            {
                error.length > 0 && (
                    <div className=" text-white p-2 rounded-md mt-2">
                        {
                            error.map((element: any, index: number) => (
                                element.map(({ file, errors }: { file: any, errors: any[] }, index: number) => (
                                    errors.map((err: any, index: number) => (
                                        <p key={index}>
                                            {file.name}
                                            {err.message}
                                        </p>
                                    ))
                                ))
                            ))
                        }
                    </div>
                )
            }



        </>
    )
}

export default DropZone