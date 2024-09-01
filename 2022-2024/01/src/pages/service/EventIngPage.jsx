import React, { useEffect, useRef, useState, useCallback } from 'react';
import sample01 from '@assets/images/sample/sample13.png';
import sample02 from '@assets/images/sample/sample14.png';
import sample03 from '@assets/images/sample/sample15.png';
import sample04 from '@assets/images/sample/sample16.png';
import sample05 from '@assets/images/sample/sample17.png';
import { Pagenation, ItemTag, BaseButton, } from '@components/common';
import { Link } from 'react-router-dom';

const EventIngPage = () => {
  return (
    <>
        <article>
            <div className="eventIngls">
                <ul>
                    <li>
                        <Link to=''><img src={sample01} /></Link>
                    </li>
                    <li>
                        <Link to=''><img src={sample02} /></Link>
                    </li>
                    <li>
                        <Link to=''><img src={sample03} /></Link>
                    </li>
                    <li>
                        <Link to=''><img src={sample04} /></Link>
                    </li>
                    <li>
                        <Link to=''><img src={sample05} /></Link>
                    </li>
                </ul>
            </div>
            <Pagenation />
        </article>
    </>
  );
};

export default EventIngPage;
