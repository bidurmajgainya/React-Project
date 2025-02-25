import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
export default function Recipe(props){
console.log(props.recipe)
    return(
      <section className="suggested-recipe-container" aria-live="polite">
      <ReactMarkdown children={props.recipe} remarkPlugins={[remarkGfm]}>{props.recipe}</ReactMarkdown>
      </section>
    )
} 