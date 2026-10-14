import menu from '../content/ymhs-menu.json';

export function MenuRose({ className = '' }) {
  return <svg className={`ymhs-rose ${className}`} viewBox="0 0 400 400" fill="none" aria-hidden="true">
    <g stroke="currentColor" strokeWidth="0.8">
      {[0, 45].map(angle => <g key={angle} transform={`rotate(${angle} 200 200)`}><rect x="64" y="64" width="272" height="272" /><path d="M200 8 256 144 392 200 256 256 200 392 144 256 8 200 144 144Z" /></g>)}
      <circle cx="200" cy="200" r="182" opacity=".4" /><circle cx="200" cy="200" r="116" opacity=".5" />
    </g>
  </svg>;
}

function PlainFigure({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

export function MenuContent({ Figure = PlainFigure }) {
  const event = menu.event;
  return <main id="main" className="ymhs-menu-page">
    <div className="ymhs-wrap">
      <header className="ymhs-intro" id="menu">
        <div>
          <p className="ymhs-eyebrow"><span className="ymhs-star" aria-hidden="true" /> GMI Torino · YMHS 2026</p>
          <h1>Il menu<span>.</span></h1>
          <p className="ymhs-lead">Il pranzo dello Youth Mental Health Summit.</p>
        </div>
        <div className="ymhs-intro-event">
          <span className="ymhs-date">25 <small>OTT</small></span>
          <div><p>Youth Mental<br />Health Summit</p><a href="#evento">Scopri l’evento <span aria-hidden="true">↗</span></a></div>
        </div>
      </header>
      <nav className="ymhs-jump" aria-label="Vai alla bowl">
        {menu.bowls.map(bowl => <a key={bowl.id} href={`#${bowl.id}`}><span>{bowl.number}</span> {bowl.title} <span aria-hidden="true">↘</span></a>)}
      </nav>
      <section className="ymhs-bowls" aria-label="Le due proposte del menu">
        {menu.bowls.map((bowl, index) => <article className={`ymhs-bowl ymhs-bowl-${bowl.id}`} id={bowl.id} key={bowl.id}>
          <div className="ymhs-bowl-top"><span>OPZIONE {bowl.number}</span><span aria-hidden="true">✧</span></div>
          <div className="ymhs-bowl-heading"><h2>{bowl.title}</h2><p className="ymhs-bowl-description">{bowl.description}</p></div>
          <Figure className="ymhs-bowl-figure" reverse={index === 1}>
            <MenuRose />
            <div className="ymhs-photo-frame"><img src={bowl.image} alt={bowl.imageAlt} width="1254" height="1254" loading={index === 0 ? 'eager' : 'lazy'} decoding="async" /></div>
          </Figure>
          <div className="ymhs-bowl-content">
            <h3>Ingredienti</h3>
            <ul className="ymhs-ingredients">{bowl.ingredients.map(ingredient => <li key={ingredient.name}><span className="ymhs-ingredient-dot" aria-hidden="true" /><span><strong>{ingredient.name}</strong>{ingredient.detail && <small>{ingredient.detail}</small>}</span></li>)}</ul>
            <div className="ymhs-allergens"><span>Allergeni indicati</span><div>{bowl.allergens.map(allergen => <strong key={allergen}>{allergen}</strong>)}</div></div>
          </div>
        </article>)}
      </section>
      <p className="ymhs-image-note">Immagini illustrative. La presentazione dei piatti può variare.</p>
      <aside className="ymhs-allergy-note" aria-labelledby="allergy-heading"><span aria-hidden="true">ⓘ</span><div><h2 id="allergy-heading">Allergie o esigenze alimentari?</h2><p>Prima di scegliere, chiedi allo staff l’elenco completo degli allergeni e le informazioni sulle possibili contaminazioni. Le indicazioni qui riportate si basano sugli ingredienti del menu e non sostituiscono la verifica delle preparazioni.</p></div></aside>
      <section className="ymhs-event" id="evento" aria-labelledby="event-heading">
        <div className="ymhs-event-copy"><p className="ymhs-eyebrow">Ci vediamo al summit</p><h2 id="event-heading">Youth Mental<br />Health Summit<span>.</span></h2><p>Una giornata di ascolto e confronto sulla salute mentale, insieme alla comunità.</p><p className="ymhs-organizers">{event.organizers}</p></div>
        <div className="ymhs-event-details">
          <dl><div><dt>Quando</dt><dd><time dateTime={event.date}>{event.dateLabel}</time><span>{event.hours}</span></dd></div><div><dt>Dove</dt><dd>{event.venue}<span>{event.city}</span></dd></div><div><dt>Quota evento</dt><dd>{event.fee}<span>{event.feeDetail}</span></dd></div><div><dt>Iscrizioni entro</dt><dd>{event.deadline}</dd></div></dl>
          <a className="ymhs-button" href={event.registrationUrl} target="_blank" rel="noopener noreferrer">Info e iscrizioni <span aria-hidden="true">↗</span></a>
          <p className="ymhs-source">Le iscrizioni si aprono nel modulo ufficiale.<br /><a href={event.instagramUrl} target="_blank" rel="noopener noreferrer">Informazioni da @gmi.torino ↗</a></p>
        </div>
      </section>
    </div>
  </main>;
}
