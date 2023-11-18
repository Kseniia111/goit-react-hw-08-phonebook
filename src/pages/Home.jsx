// import styled from 'styled-components';

// const HomePage = () => {
//   return (
//     <WrapperHomePage>
//       <HomeTitle>
//         Hey! To use the phone book, go through the authorization procedure and
//         go to the Contacts section.
//       </HomeTitle>
//     </WrapperHomePage>
//   );
// };

// export default HomePage;

// export const WrapperHomePage = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   padding: 40px;
// `;

// export const HomeTitle = styled.p`
//   max-width: 400px;
//   font-size: 32px;
//   font-weight: 700;
//   text-align: center;
// `;
const styles = {
  container: {
    minHeight: 'calc(60vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => {
  return (
    <div className="hero-section" style={styles.container}>
      <h1 className="hero-title" style={styles.title}>
        PhoneBook{' '}
      </h1>
    </div>
  );
};

export default HomePage;
