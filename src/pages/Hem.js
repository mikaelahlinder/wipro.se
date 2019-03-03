import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <>
    <h1>
      <strong>
        Möt en av Sveriges mest erfarna och engagerande konsulter och föreläsare under temat{' '}
        <i>Framgångsrik arbetsplats</i>
      </strong>
    </h1>
    <p>
      Jag har i olika roller coachat tusentals chefer och medarbetare på hundratals arbetsplatser, både inom
      näringslivet och offentlig verksamhet. Med mitt arbetssätt kommer jag nära människor i deras vardagsarbete.
    </p>
    <p>
      Tillsammans skapar vi i utvecklingsprogram konkreta och höga effekter vad gäller
      <i>nöjda kunder </i>(kommersiella kunder, medborgare, patienter etc), <i>god ekonomi </i>(effektivitet, lönsamhet
      etc) och <i>arbetsgläjde</i> (positiv stämning, lite stress etc).
    </p>
    <p>
      Möjligheten finns också att anlita mig som energigivande föreläsare vid upptaktsträff, kickoffmöte, konferens,
      utbildning och personalmöte.
    </p>
    <p>
      Läs mer&nbsp;
      <Link to='/kanner-du-igen-dig'>här</Link>
      <span>. Du är välkommen att höra av dig!</span>
    </p>
    <div>Göran Wickström</div>
    <div>info@wipro.se</div>
    <div>070-6367526</div>
  </>
)
