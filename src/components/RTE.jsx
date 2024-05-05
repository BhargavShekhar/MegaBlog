import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultValue = '' }) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
            <Controller
                name={name || 'content'}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey='wreaz0bb1lvz0ssdnc85yu7ibcghcwom0x1vnuqmgragyct0'
                        initialValue={defaultValue}
                        init={{
                            branding: false,
                            height: 500,
                            manubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}

// export default function RTE() {
//     const editorRef = useRef(null);

//     const log = () => {
//         if (editorRef.current)
//             console.log(editorRef.current.getContent());
//     }

//     return (
//         <>
//             <Editor
//                 initialValue='default value'
//                 init={{
//                     branding: false,
//                     height: 500,
//                     manubar: true,
//                     plugins: ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
//                         'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
//                         'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'],
//                     toolbar: 'undo redo | blocks | ' +
//                         'bold italic forecolor | alignleft aligncenter ' +
//                         'alignright alignjustify | bullist numlist outdent indent | ' +
//                         'removeformat | help',
//                     content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
//                 }}
//             />
//             <button onClick={editorRef}>Log editor content</button>
//         </>
//     )
// }
