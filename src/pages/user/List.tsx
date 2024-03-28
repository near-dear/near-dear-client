import React, { useState } from 'react';

import styled from '@emotion/styled';
// import Button from '@/common/components/Button';

import { UserInformation } from './UserData';

import { ReservationData } from './ReservationData';
import { OutgoingMessage } from 'http';

const List = () => {
    const [isActive, setIsActive] = useState(false);

    const UserMenu = ['구매내역', '좋아요'];
    const SellerMenu = ['예약', '완료', '내상품'];

    const activeHandler = (itm: any, idx: number) => {
        setIsActive(isActive);
    };
    return (
        <ListContainer>
            {UserInformation.userType === 'user' ? (
                <MenuContainer>
                    {UserMenu.map((itm, idx) => (
                        <Menu key={idx} onClick={() => activeHandler(itm, idx)} active={isActive}>
                            {itm}
                        </Menu>
                    ))}
                </MenuContainer>
            ) : (
                <MenuContainer>
                    {SellerMenu.map((itm, idx) => (
                        <Menu onClick={() => activeHandler(itm, idx)} active={isActive}>
                            {itm}
                        </Menu>
                    ))}
                </MenuContainer>
            )}
            <ReservationList>
                {ReservationData.map(reservationItm => (
                    <ListItem>
                        <ImportantMsg>
                            <DDay>D-30</DDay>
                            <Type>{reservationItm.howToFind}</Type>
                        </ImportantMsg>
                        <Content>
                            <Img></Img>
                            <Information>
                                <Product>
                                    {reservationItm.product} <Count>{reservationItm.count}</Count>
                                </Product>
                                <Name>{reservationItm.name}</Name>
                                <Time>{reservationItm.time}</Time>
                                <Count>{reservationItm.request}</Count>
                            </Information>
                        </Content>
                        <Button>완료 처리하기</Button>
                    </ListItem>
                ))}
            </ReservationList>
        </ListContainer>
    );
};

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const MenuContainer = styled.div`
    display: flex;
    gap: 10px;
`;
const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid gray;
    min-height: 180px;
    padding: 10px 10px;
    box-sizing: border-box;
    gap: 10px;
`;
const Content = styled.div`
    display: flex;
    gap: 15px;
    height: 100%;
`;

const DDay = styled.div`
    padding: 3px 3px;
    box-sizing: border-box;
    background-color: rgb(252, 252, 252);
    border-radius: 5px;
`;
const Type = styled(DDay)``;

const ImportantMsg = styled.div`
    display: flex;
    gap: 5px;
`;

const Menu = styled.div<{ active: boolean }>`
    padding: 10px 10px;
    box-sizing: border-box;
    background-color: rgb(252, 252, 252);
    font-weight: ${props => (props.active ? 700 : 500)};
`;
const ReservationList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const Img = styled.div`
    min-width: 120px;
    min-height: 120px;
    background-color: rgb(252, 252, 252);
`;

const Information = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Product = styled.div`
    font-weight: 700;
    display: flex;
`;
const Name = styled.div``;
const Time = styled.div`
    color: #ff0000;
`;
const Count = styled.div``;

const Button = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid black;
    padding: 10px 10px;
    box-sizing: border-box;
    font-weight: 600;
`;

export default List;
