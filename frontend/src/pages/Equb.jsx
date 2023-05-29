import React, { useEffect } from "react";
import Card from "../comopnents/cards/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchEqubType } from "../redux/reducers/equbTypeReducer";

const Equb = () => {
  const dispatch = useDispatch();
  const equbType = useSelector((state) => state.equb.equbType);
  const loading = useSelector((state) => state.equb.loading);
  const error = useSelector((state) => state.equb.error);

  useEffect(() => {
    dispatch(fetchEqubType());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5 px-5 pt-[70px]">
      {equbType.map((equbItem) => (
        <Card key={equbItem.id} equbItem={equbItem} />
      ))}
    </div>
  );
};

export default Equb;
