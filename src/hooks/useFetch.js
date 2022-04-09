import { useEffect, useRef, useState } from 'react'

const useFetch = (url, state) => {

  const [value, setValue] = useState({ loading: true, data: state, error: null });

  const componentMount = useRef(true)


  useEffect(() => {
    setValue({
      ...value,
      loading: true
    })
    const getValues = async () => {
      try {
        const response = await fetch(url);
        const { coins } = await response.json();
        if (componentMount.current) {
          setValue({
            loading: false,
            data: coins,
            error: null
          })
        }
      } catch (error) {
        setValue({
          ...value,
          loading: false,
          error: 'Hubo un error'
        })
      }
    }

      getValues();

    return () => {
      componentMount.current = false;
    }
  }, []);

  useEffect(() => {

    const getValues = async () => {
      setValue({
        ...value,
        loading: true
      })
      try {
        const response = await fetch(url);
        const { coins } = await response.json();
        if (componentMount.current) {
          setValue({
            loading: false,
            data: coins,
            error: null
          })
        }
      } catch (error) {
        setValue({
          ...value,
          loading: false,
          error: 'Hubo un error'
        })
      }
    }

    const interval = setInterval(() => {
      getValues();
    }, 60000);

    return () => clearInterval(interval);

  }, [])

  return value
}

export default useFetch