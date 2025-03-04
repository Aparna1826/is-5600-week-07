export default function SingleView() {
    const [ product, setProduct ] = useState(null)

    const fetchProductById = async (id) => {
        const product = await fetch(`${BASE_URL}/products/${id}`)
          .then((res) => res.json());
        return product;
      };

      useEffect(() => {
        const getProduct = async () => {
          const data = await fetchProductById(id);
          setProduct(data)
        }
        getProduct();
      }, [id, fetchProductById]);

      if (!product) return (<div className="loading-spinner"></div>);

  // ...
}