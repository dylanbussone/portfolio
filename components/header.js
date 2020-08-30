import { ImpactText } from './text';

const Header = () => (
  <header>
    <ImpactText>Dylan Bussone</ImpactText>
    <nav>
      <ImpactText>
        <a href="#">Work</a>
      </ImpactText>

      <ImpactText>
        <a href="#">Fun</a>
      </ImpactText>

      <ImpactText>
        <a href="#">About</a>
      </ImpactText>

      <ImpactText>
        <a href="#">Resume</a>
      </ImpactText>
    </nav>

    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 75px;
        padding: 0 3rem;
      }

      nav a {
        margin-right: 3rem;
      }
    `}</style>
  </header>
);

export default Header;
