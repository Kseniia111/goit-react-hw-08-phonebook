export default function Home() {
  return (
    <div className="hero-section" style={styles.container}>
      <h1 className="hero-title" style={styles.title}>
        PhoneBook{' '}
      </h1>
    </div>
  );
}
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
