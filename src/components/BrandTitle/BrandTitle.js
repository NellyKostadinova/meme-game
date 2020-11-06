import './BrandTitle.scss';

export default function BrandTitle({ addClasses }) {
  let componentClasses = 'title ' + (addClasses || '');

  return (
    <div className={componentClasses}>
      <span className="teal">what do </span>
      <span className="purple">you </span>
      <span className="magenta">meme</span>
      &nbsp;
      <span className="purple">?</span>
    </div>
  );
}
