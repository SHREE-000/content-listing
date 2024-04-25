import React from 'react'
import List from './List';
import Spinner from '../../shared/components/Spinner';
import useLazyLoad from '../../utils/customHooks/useLazyLoad';
import useAPI from '../../utils/customHooks/usAPI';

const Content = () => {
    const { loading, data } = useAPI('https://test.create.diagnal.com/data/page1.json');
    const [placeholderRef, inView] = useLazyLoad();
    // console.log(data, 'data data data');
  return (<> 
    {loading ? <div className="mt-10 flex justify-center"><Spinner/></div> : <div className="mt-5 w-full grid grid-cols-3">
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
    <List placeholderRef={placeholderRef} inView={inView} data={data}/>
</div>}
</>
  )
}
export default Content