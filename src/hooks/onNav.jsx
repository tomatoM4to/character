export const onNav = (e, ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
}