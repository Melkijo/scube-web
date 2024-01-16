export default function loader({ src, width, quality }) {
    return `https://firebasestorage.googleapis.com/v0/b/scube-center.appspot.com/o/${src}?alt=media&token=eff5bba2-af0e-4070-b96b-2ddce513bb1b`
}